const main = document.querySelector("main")

main.innerHTML += 
`<h1>TEST</h1>
<table>
    <tr>
       <td>'${sessionStorage.getItem(teddyChoice)}</>
    </tr>
</table> `