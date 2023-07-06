export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      forms: {
        Row: {
          created_at: string | null
          form_type: string | null
          id: string
          patient_given_name: string | null
          patient_surname: string | null
          physician_given_name: string | null
          physician_mobile: string | null
          physician_surname: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          form_type?: string | null
          id?: string
          patient_given_name?: string | null
          patient_surname?: string | null
          physician_given_name?: string | null
          physician_mobile?: string | null
          physician_surname?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          form_type?: string | null
          id?: string
          patient_given_name?: string | null
          patient_surname?: string | null
          physician_given_name?: string | null
          physician_mobile?: string | null
          physician_surname?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          given_name: string | null
          id: string
          mobile: string | null
          surname: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          given_name?: string | null
          id: string
          mobile?: string | null
          surname?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          given_name?: string | null
          id?: string
          mobile?: string | null
          surname?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
