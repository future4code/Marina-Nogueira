// Libraries
import express, { Router, Response, Request } from 'express';
import cors from 'cors';

// Query Functions
// import { createUser } from '../queries/data'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())