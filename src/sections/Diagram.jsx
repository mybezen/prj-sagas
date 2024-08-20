import DiagramPenyebabUtama from "../components/Charts"

function Diagram() {
  return (
    <div className="">
        <div className="flex flex-col items-center">
        <h1 className="text-2xl poppins-bold">Diagram Penyebab Utama</h1>
        <p>Menyajikan analisis mendalam mengenai berbagai faktor risiko yang paling berkontribusi terhadap timbulnya kondisi medis utama, seperti hipertensi, obesitas, dan osteoporosis, dengan tujuan untuk memberikan wawasan yang lebih komprehensif bagi upaya pencegahan dan penanganan penyakit.</p>
        </div>
        <div className=""> 
            <DiagramPenyebabUtama />
        </div>
    </div>
  )
}

export default Diagram
