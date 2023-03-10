export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          countries: string[] | null
          created_at: string
          description: string | null
          genres: string[] | null
          id: number
          iframes: string[] | null
          imdb_id: string | null
          kinopoisk_id: number
          name_original: string | null
          name_ru: string | null
          poster_url: string | null
          rating_age: number | null
          rating_imdb: number | null
          rating_kinopoisk: number | null
          short_description: string | null
          slogan: string | null
          time_length: number | null
          type: Database["public"]["Enums"]["categories"]
          updated_at: string
          vote_imdb_count: number | null
          vote_kinopoisk_count: number | null
          year: number | null
        }
        Insert: {
          countries?: string[] | null
          created_at?: string
          description?: string | null
          genres?: string[] | null
          id?: number
          iframes?: string[] | null
          imdb_id?: string | null
          kinopoisk_id: number
          name_original?: string | null
          name_ru?: string | null
          poster_url?: string | null
          rating_age?: number | null
          rating_imdb?: number | null
          rating_kinopoisk?: number | null
          short_description?: string | null
          slogan?: string | null
          time_length?: number | null
          type: Database["public"]["Enums"]["categories"]
          updated_at?: string
          vote_imdb_count?: number | null
          vote_kinopoisk_count?: number | null
          year?: number | null
        }
        Update: {
          countries?: string[] | null
          created_at?: string
          description?: string | null
          genres?: string[] | null
          id?: number
          iframes?: string[] | null
          imdb_id?: string | null
          kinopoisk_id?: number
          name_original?: string | null
          name_ru?: string | null
          poster_url?: string | null
          rating_age?: number | null
          rating_imdb?: number | null
          rating_kinopoisk?: number | null
          short_description?: string | null
          slogan?: string | null
          time_length?: number | null
          type?: Database["public"]["Enums"]["categories"]
          updated_at?: string
          vote_imdb_count?: number | null
          vote_kinopoisk_count?: number | null
          year?: number | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          updated_at?: string | null
          username?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      categories: "FILMS" | "SERIALS" | "MULTFILMS" | "MULTSERIALS"
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

