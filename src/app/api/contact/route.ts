import { neon } from '@neondatabase/serverless'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, service_area, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'El nombre y correo son obligatorios.' },
        { status: 400 }
      )
    }

    const sql = neon(process.env.DATABASE_URL!)
    
    await sql`
      INSERT INTO leads (name, email, phone, address, service_area, message)
      VALUES (${name}, ${email}, ${phone}, ${address}, ${service_area}, ${message})
    `

    return NextResponse.json({ message: 'Registro exitoso' }, { status: 200 })
  } catch (error) {
    console.error('Database Error:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud.' },
      { status: 500 }
    )
  }
}
