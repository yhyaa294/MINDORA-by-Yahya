-- PENTING: Jalankan script ini di SQL Editor Supabase Anda (https://supabase.com/dashboard/project/_/sql)

-- 1. Aktifkan Extension Vector
create extension if not exists vector;

-- 2. Buat Tabel Dokumen (Knowledge Base)
create table if not exists documents (
  id bigserial primary key,
  content text, -- Isi materi
  metadata jsonb, -- Info tambahan (misal: topik, sumber)
  embedding vector(768) -- Dimensi vector text-embedding-004 (Gemini)
);

-- 3. Buat Fungsi Search (Similarity Search)
create or replace function match_documents (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $
begin
  return query
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
end;
$;

-- 4. (Opsional) Buat Index agar pencarian lebih cepat (HNSW)
create index on documents using hnsw (embedding vector_cosine_ops);
