fetch('https://api-osmosis.imperator.co/fees/v1/pools')
  .then((res) => {
    return res.json()
  })
  .then((objectData) => {
    let content = (objectData.data)
    let tableData = ""
    console.log(content)
    content.map((values) => {
        console.log(values.pool_id);
        tableData += `<tr>
        <th scope="row">${values.pool_id}</th>
        <td>${values.volume_24h}</td>
        <td>${values.volume_7d}</td>
        <td>${values.fees_spent_24h}</td>
        <td>${values.fees_spent_7d}</td>
        <td>${values.fees_percentage}</td>
    </tr>`
    })
    document.getElementById("table_body").innerHTML = tableData
  })
