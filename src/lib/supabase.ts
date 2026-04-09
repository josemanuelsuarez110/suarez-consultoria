import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Ejemplo de uso para el Portfolio de Certificaciones:
 * 
 * 1. Crea una tabla 'certifications' en Supabase con campos: 
 *    id, title, issuer, status, type, color, certificate_url
 * 
 * 2. En CredentialsVault.tsx, podrías hacer lo siguiente:
 * 
 * useEffect(() => {
 *   const fetchCerts = async () => {
 *     const { data } = await supabase.from('certifications').select('*')
 *     if (data) setCerts(data)
 *   }
 *   fetchCerts()
 * }, [])
 */
