// import { NextRequest, NextResponse } from 'next/server'

// // Shared OTP store — same Map as send-otp
// // NOTE: In-memory works on single server. Use Redis for multi-instance deployments.
// const otpStore = new Map<string, { otp: string; expiresAt: number }>()

// // Re-export so send-otp can share this instance
// // ⚠️ For Next.js, both routes share the same module instance in dev,
// //    but in production use Redis/DB for reliability.
// export { otpStore }

// export async function POST(req: NextRequest) {
//     try {
//         const { phone, otp } = await req.json()

//         if (!phone || !otp) {
//             return NextResponse.json({ error: 'Phone and OTP required' }, { status: 400 })
//         }

//         const cleanPhone = phone.replace(/\D/g, '').replace(/^91/, '').slice(-10)

//         const stored = otpStore.get(cleanPhone)

//         // OTP not found
//         if (!stored) {
//             return NextResponse.json({ error: 'OTP expired or not sent' }, { status: 400 })
//         }

//         // OTP expired
//         if (Date.now() > stored.expiresAt) {
//             otpStore.delete(cleanPhone)
//             return NextResponse.json({ error: 'OTP expired. Please request a new one.' }, { status: 400 })
//         }

//         // OTP mismatch
//         if (stored.otp !== otp.trim()) {
//             return NextResponse.json({ error: 'Incorrect OTP. Please try again.' }, { status: 400 })
//         }

//         // ✅ OTP correct — delete from store
//         otpStore.delete(cleanPhone)

//         return NextResponse.json({ success: true, message: 'Phone verified successfully' })

//     } catch (err) {
//         console.error('Verify OTP error:', err)
//         return NextResponse.json({ error: 'Server error' }, { status: 500 })
//     }
// }


import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { phone, otp } = await req.json()

        const cleanPhone = phone
            .replace(/\D/g, '')
            .replace(/^91/, '')
            .slice(-10)

        const response = await fetch(
            `https://control.msg91.com/api/v5/otp/verify?mobile=91${cleanPhone}&otp=${otp}`,
            {
                method: 'GET',
                headers: {
                    authkey: process.env.MSG91_AUTH_KEY!,
                },
            }
        )

        const data = await response.json()

        console.log('VERIFY RESPONSE:', data)

        if (data.type === 'success') {
            return NextResponse.json({
                success: true,
                message: 'OTP verified',
            })
        }

        return NextResponse.json(
            { error: 'Invalid OTP' },
            { status: 400 }
        )

    } catch (err) {
        console.error(err)

        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        )
    }
}