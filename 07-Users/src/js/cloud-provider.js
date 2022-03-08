const cloudURL = 'https://api.cloudinary.com/v1_1/dfqznh5nf/upload'
const cloudPreset = 'xy18dyrb'

// archivoSubir :: File
const subirArchivo = async (archivo) => {
    const formData = new FormData()
    formData.append('upload_preset', cloudPreset)
    formData.append('file', archivo)

    try {
        const resp = await fetch(cloudURL, {
            method: "POST",
            body: formData,
            redirect: 'follow'
        })
        if (resp.ok) {
            const cloudResp = await resp.json()
            console.log(cloudResp)
            return cloudResp.secure_url
        } else {
            throw await resp.json()
        }



    } catch (error) {
        throw error;
    }



}
export {
    subirArchivo
}