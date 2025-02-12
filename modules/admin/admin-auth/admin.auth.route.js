import express from 'express'
import adminAuth from '../admin-auth/admin.auth.controller.js'

const router=express.Router()

router.post("/signup",adminAuth.signup)

router.post("/login",adminAuth.login)

export default router