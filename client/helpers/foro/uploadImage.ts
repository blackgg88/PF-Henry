
export const uploadImage = async (e:any, setImage: any) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", "SmartNest");
      formData.append("upload_preset", "db1xdljk");
    
      const response = await fetch("https://api.cloudinary.com/v1_1/dg1roy34p/image/upload", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      setImage(data.secure_url)
    } catch (error) {
      alert(error);
    }
  };