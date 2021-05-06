import { setToken } from "../helpers/manage-token"

export const authenticate = async (req, res, next) => {
	const token = await setToken()

	if (token) {
		req.token = token
		return next()
	}
	return res.status(401).json({
		message: 'Unauthorized',
	})
}