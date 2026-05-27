// import { NextRequest, NextResponse } from 'next/server'

// // Simple in-memory OTP store (works for single server)
// // For production with multiple servers, use Redis
// const otpStore = new Map<string, { otp: string; expiresAt: number }>()

// export async function POST(req: NextRequest) {
//     try {
//         const { phone } = await req.json()

//         if (!phone) {
//             return NextResponse.json({ error: 'Phone number required' }, { status: 400 })
//         }

//         // Clean phone number - only digits
//         const cleanPhone = phone.replace(/\D/g, '').replace(/^91/, '').slice(-10)

//         if (cleanPhone.length !== 10) {
//             return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
//         }

//         // Generate 6-digit OTP
//         const otp = Math.floor(100000 + Math.random() * 900000).toString()

//         // Store OTP with 5 minute expiry
//         otpStore.set(cleanPhone, {
//             otp,
//             expiresAt: Date.now() + 5 * 60 * 1000
//         })

//         // Send OTP via Fast2SMS
//         const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
//             method: 'POST',
//             headers: {
//                 'authorization': process.env.FAST2SMS_API_KEY!,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 route: 'otp',
//                 variables_values: otp,
//                 numbers: cleanPhone,
//             })
//         })

//         const data = await response.json()

//         if (!data.return) {
//             console.error('Fast2SMS error:', data)
//             return NextResponse.json({ error: 'OTP send failed. Check API key.' }, { status: 500 })
//         }

//         return NextResponse.json({ success: true, message: 'OTP sent successfully' })

//     } catch (err) {
//         console.error('Send OTP error:', err)
//         return NextResponse.json({ error: 'Server error' }, { status: 500 })
//     }
// }

// // Export store so verify route can access it
// export { otpStore }


// import { NextRequest, NextResponse } from 'next/server'

// // Simple in-memory OTP store
// const otpStore = new Map<string, { otp: string; expiresAt: number }>()

// export async function POST(req: NextRequest) {
//     try {
//         const { phone } = await req.json()

//         if (!phone) {
//             return NextResponse.json(
//                 { error: 'Phone number required' },
//                 { status: 400 }
//             )
//         }

//         // Clean phone number
//         const cleanPhone = phone
//             .replace(/\D/g, '')
//             .replace(/^91/, '')
//             .slice(-10)

//         if (cleanPhone.length !== 10) {
//             return NextResponse.json(
//                 { error: 'Invalid phone number' },
//                 { status: 400 }
//             )
//         }

//         // Generate OTP
//         const otp = Math.floor(100000 + Math.random() * 900000).toString()

//         // Store OTP
//         otpStore.set(cleanPhone, {
//             otp,
//             expiresAt: Date.now() + 5 * 60 * 1000
//         })

//         // MSG91 Send OTP
//         const response = await fetch(
//             `https://control.msg91.com/api/v5/otp`,
//             {
//                 method: 'POST',
//                 headers: {
//                     authkey: process.env.MSG91_AUTH_KEY!,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     template_id: process.env.MSG91_TEMPLATE_ID,
//                     mobile: `91${cleanPhone}`,
//                     otp: otp,
//                 }),
//             }
//         )

//         const data = await response.json()

//         console.log(data)

//         if (data.type !== 'success') {
//             return NextResponse.json(
//                 { error: 'OTP send failed' },
//                 { status: 500 }
//             )
//         }

//         return NextResponse.json({
//             success: true,
//             message: 'OTP sent successfully'
//         })

//     } catch (err) {
//         console.error('Send OTP error:', err)

//         return NextResponse.json(
//             { error: 'Server error' },
//             { status: 500 }
//         )
//     }
// }

// // Export store
// export { otpStore }



// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(req: NextRequest) {
//     try {
//         const { phone } = await req.json()

//         if (!phone) {
//             return NextResponse.json(
//                 { error: 'Phone number required' },
//                 { status: 400 }
//             )
//         }

//         // Clean phone number
//         const cleanPhone = phone
//             .replace(/\D/g, '')
//             .replace(/^91/, '')
//             .slice(-10)

//         // Validate Indian mobile number
//         if (cleanPhone.length !== 10) {
//             return NextResponse.json(
//                 { error: 'Invalid phone number' },
//                 { status: 400 }
//             )
//         }

//         // Send OTP via MSG91
//         const response = await fetch(
//             'https://control.msg91.com/api/v5/otp',
//             {
//                 method: 'POST',
//                 headers: {
//                     authkey: process.env.MSG91_AUTH_KEY!,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     template_id: process.env.MSG91_TEMPLATE_ID,
//                     mobile: `91${cleanPhone}`,
//                 }),
//             }
//         )

//         const data = await response.json()

//         console.log('MSG91 SEND OTP:', data)

//         // Success check
//         if (data.type !== 'success') {
//             return NextResponse.json(
//                 {
//                     error: data.message || 'Failed to send OTP',
//                 },
//                 { status: 500 }
//             )
//         }

//         return NextResponse.json({
//             success: true,
//             message: 'OTP sent successfully',
//         })

//     } catch (error) {
//         console.error('SEND OTP ERROR:', error)

//         return NextResponse.json(
//             { error: 'Server error' },
//             { status: 500 }
//         )
//     }
// }


// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(req: NextRequest) {
//     try {
//         const { phone } = await req.json()

//         if (!phone) {
//             return NextResponse.json(
//                 { error: 'Phone number required' },
//                 { status: 400 }
//             )
//         }

//         const cleanPhone = phone
//             .replace(/\D/g, '')
//             .replace(/^91/, '')
//             .slice(-10)

//         const response = await fetch(
//             `https://control.msg91.com/api/v5/otp?template_id=${process.env.MSG91_TEMPLATE_ID}&mobile=91${cleanPhone}`,
//             {
//                 method: 'POST',
//                 headers: {
//                     authkey: process.env.MSG91_AUTH_KEY!,
//                 },
//             }
//         )

//         const data = await response.json()

//         console.log('MSG91 RESPONSE:', data)

//         if (data.type !== 'success') {
//             return NextResponse.json(
//                 { error: 'OTP send failed' },
//                 { status: 500 }
//             )
//         }

//         return NextResponse.json({
//             success: true,
//             message: 'OTP sent successfully'
//         })

//     } catch (err) {
//         console.error(err)

//         return NextResponse.json(
//             { error: 'Server error' },
//             { status: 500 }
//         )
//     }
// }


// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(req: NextRequest) {
//     try {
//         const { phone } = await req.json()

//         const cleanPhone = phone
//             .replace(/\D/g, '')
//             .replace(/^91/, '')
//             .slice(-10)

//         const response = await fetch(
//             'https://control.msg91.com/api/v5/otp',
//             {
//                 method: 'POST',
//                 headers: {
//                     authkey: process.env.MSG91_AUTH_KEY!,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     mobile: `91${cleanPhone}`,
//                     otp_expiry: 5,
//                 }),
//             }
//         )

//         const data = await response.json()

//         console.log(data)

//         return NextResponse.json(data)

//     } catch (error) {
//         console.log(error)

//         return NextResponse.json(
//             { error: 'Server error' },
//             { status: 500 }
//         )
//     }
// }


import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const { phone } = await req.json()

        const cleanPhone = phone
            .replace(/\D/g, '')
            .replace(/^91/, '')
            .slice(-10)

        if (cleanPhone.length !== 10) {
            return NextResponse.json(
                { error: 'Invalid phone number' },
                { status: 400 }
            )
        }

        const response = await fetch(
            `https://control.msg91.com/api/v5/otp?template_id=${process.env.MSG91_TEMPLATE_ID}&mobile=91${cleanPhone}&otp_expiry=5`,
            {
                method: 'POST',
                headers: {
                    authkey: process.env.MSG91_AUTH_KEY!,
                    'Content-Type': 'application/json',
                },
            }
        )

        const data = await response.json()
        console.log('SEND OTP RESPONSE:', data)

        return NextResponse.json(data)

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        )
    }
}