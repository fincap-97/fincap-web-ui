// import { initializeApp, getApps, getApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
// export const auth = getAuth(app)

// import { initializeApp, getApps, getApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// // App Check — only on client side
// if (typeof window !== 'undefined') {
//     initializeAppCheck(app, {
//         provider: new ReCaptchaV3Provider('6Lca4P4sAAAAACQJQELvdh3Tyw0SdyAPGLo9iYRW'),
//         isTokenAutoRefreshEnabled: true,
//     })
// }

// export const auth = getAuth(app)



// import { initializeApp, getApps, getApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
// import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check'

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// // App Check — only on client side
// if (typeof window !== 'undefined') {
//     // Debug token for development
//     if (process.env.NODE_ENV === 'development') {
//         (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true
//     }
//     initializeAppCheck(app, {
//         provider: new ReCaptchaEnterpriseProvider('6Lca4P4sAAAAACQJQELvdh3Tyw0SdyAPGLo9iYRW'),
//         isTokenAutoRefreshEnabled: true,
//     })
// }

// export const auth = getAuth(app)



import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(app)