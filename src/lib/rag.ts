import { GoogleGenerativeAI } from '@google/generative-ai';
import { supabase } from './supabase';

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "");

// Model Embedding
const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004" });

/**
 * Mengubah teks menjadi vector array (768 dimensi)
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing");
  
  // Bersihkan teks (remove newlines berlebih)
  const cleanText = text.replace(/\n/g, " ");
  
  const result = await embeddingModel.embedContent(cleanText);
  return result.embedding.values;
}

/**
 * Mencari dokumen yang relevan di Supabase berdasarkan query
 */
export async function retrieveDocuments(query: string, threshold = 0.5, limit = 3) {
  try {
    // 1. Generate embedding untuk query user
    const queryEmbedding = await generateEmbedding(query);

    // 2. Panggil fungsi RPC di Supabase
    const { data: documents, error } = await supabase.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: threshold,
      match_count: limit
    });

    if (error) {
        console.error("Supabase RPC Error:", error);
        throw error;
    }

    return documents;
  } catch (error) {
    console.error("RAG Retrieval Error:", error);
    return []; // Return empty array on error to prevent crash
  }
}
