
export default function Product(){
    return(
        <table style={{border:"1px solid black", padding:"8px"}}>
            <thead>
                <tr>
                    <th style={{border:"1px solid black", padding:"10px"}}>Sr.</th>
                    <th style={{border:"1px solid black", padding:"10px"}}> Name</th>
                    <th style={{border:"1px solid black", padding:"10px"}}> Price</th>
                    <th style={{border:"1px solid black", padding:"10px"}}> Category</th>
                </tr>
                <tr>
                    <td style={{border:"1px solid black", padding:"10px"}}>1</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>Corolla</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>45lack</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>Cars</td>
                </tr>

                <tr>
                    <td style={{border:"1px solid black", padding:"10px"}}>2</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>Civic</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>70lack</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>Cars</td>
                </tr>

                <tr>
                    <td style={{border:"1px solid black", padding:"10px"}}>3</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>mehran</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>8lack</td>
                    <td style={{border:"1px solid black", padding:"10px"}}>Cars</td>
                </tr>
            </thead>
        </table>
    )
}