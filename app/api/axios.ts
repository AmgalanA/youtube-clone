import axios from 'axios'

export const axiosClassic = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL
})
