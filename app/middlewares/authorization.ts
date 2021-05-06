import { getToken } from "../helpers/manage-token"

export const authorization = async (req, res, next) => {
	const token = await getToken()

	if (token) {
		req.token = token
		return next()
	}
	return res.status(401).json({
		message: 'Unauthorized',
	})
}