const addImage = async (req) => {
  if (!req.file) {
return null  }

  const base64Image = req.file.buffer.toString('base64');
  return {
    data: base64Image,
    contentType: req.file.mimetype
  };
};
