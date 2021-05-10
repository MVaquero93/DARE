const handleThirdPartyError = (controllerToCall) => {
  return (req, res, next) => {
    controllerToCall(req, res, next).then((result) => {
        res.send(result)
    }).catch((err) => {
      return res.status(err.response.status).json({
        message: err.response.statusText,
      }) 
    })
  }
}

export const hTPE = handleThirdPartyError