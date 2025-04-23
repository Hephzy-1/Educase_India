function AppResponse(res, message, data = {}, statusCode = 200) {
  res.status(statusCode).json({
    success: true,
    message: message,
    data: data
  });
}

export default AppResponse;