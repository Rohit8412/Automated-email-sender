import './App.css'
import db from './Firebase'
import { collection, getDocs, Timestamp, doc, setDoc } from 'firebase/firestore'
import { send, init } from 'emailjs-com'

var timestamp
function App() {
  function submit() {
    var Name = document.getElementById('name')
    var EmailId = document.getElementById('email')
    var Clg = document.getElementById('clg')
    var Sem = document.getElementById('sem')

    const contactUsData = {
      Name: Name.value,
      EmailId: EmailId.value,
      College: Clg.value,
      Semester: Sem.value,
    }

    validateForm(contactUsData)
  }
  function validateForm(contactUsData) {
    if (
      contactUsData.Name == '' ||
      contactUsData.EmailId == '' ||
      contactUsData.College == '' ||
      contactUsData.Semester == ''
    ) {
      alert('Please fill up the required fields.')
    } else if (
      !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(contactUsData.EmailId)
    ) {
      alert('Please enter a valid email address.')
    } else {
      setInfo(contactUsData)
    }
  }

  async function setInfo(contactUsData) {
    document.getElementById('button').disabled = true
    document.getElementById('button').style.backgroundColor = 'gray'
    // timestamp = String(new Date().getTime())

    // //db
    // await setDoc(doc(db, 'registration', timestamp), contactUsData)
    // alert('Congratulations! Your information has been saved successfully.')
    // deletedata()
    // // window.location.reload();
    sendEmail(contactUsData)
  }
  function deletedata() {
    var Name = document.getElementById('name')
    var EmailId = document.getElementById('email')
    var Clg = document.getElementById('clg')
    var Sem = document.getElementById('sem')

    Name.value = null
    EmailId.value = null
    Clg.value = null
    Sem.value = null
  }

  const sendEmail = (data) => {
    //console.log("enter")
    init('user_qet4RKd7C7UreliHN5dhq') //user id
    const toSend = {
      name: data.Name,
      sem: data.Semester,
      email: data.EmailId,
      clg: data.College,
      referenceId: timestamp,
    }
    // console.log(toSend)
    //(serviceid,templateid,sendingdata)
    send('service_r8xht0n', 'template_eqh6a2c', toSend).then(
      (result) => {
        //console.log('exit')
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }
  // referenceId
  return (
    <div className='App'>
      <form id='form'>
        <input type='text' id='name' placeholder='Name'></input>
        <input type='text' id='sem' placeholder='Semester'></input>
        <input type='text' id='clg' placeholder='College'></input>
        <input type='text' id='email' placeholder='EMail' name='email'></input>
        <button id='button' onClick={submit}>
          submit
        </button>
      </form>
    </div>
  )
}

export default App
