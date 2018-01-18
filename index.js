const buttonAdd = $("#add");
const tableBody = $("#table-body");
let contacts = []

function validateForm() {
  var firstName = document.querySelector('#firstName').value
  var lastName = document.getElementById('lastName').value
  var phone = document.getElementById('phone').value

  // console.log(firstName, lastName, phone)
  contacts.push({
    firstName: firstName,
    lastName: lastName,
    phone: phone
  })
  insertNewContact(firstName, lastName, phone)
}

buttonAdd.on("click", validateForm)

function insertNewContact(firstName, lastName, phone) {
  const rowId = contacts.length + 1
  console.log("rowId:", rowId);

  const newRow = `
  <tr id="row-${rowId}">
    <td>
    ${firstName}
    </td>
    <td>
    ${lastName}
    </td>
    <td>
    ${phone}
    </td>
    <td>
      <div class="text-center">
        <button id='delete-${rowId}' class='btn btn-block'>Delete</button>
      </div>
    </td>
  </tr>
  `

  tableBody.append(newRow)
  const buttonDelete = $(`#delete-${rowId}`)

  buttonDelete.on("click", function() {
    $(`#row-${rowId}`).remove()
    contacts.splice(rowId - 1, 1)
  })
}