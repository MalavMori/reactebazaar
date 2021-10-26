import React,{useState} from 'react';
import './scss/contectus.scss';

const Contectus = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });
    let name, value;
    const getuserdata = (event) => {
        name = event.target.name;
        value = event.target.value;
        setuser({ ...user, [name]: value })
    };
    const postdata = async (e) => {
        e.preventDefault();
        const { fname, lname, email, phone, message, } = user;
        if(fname && lname && email && phone && message){
        const res = await fetch('https://ebazaardata-default-rtdb.firebaseio.com/usermessage.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                phone,
                message,
            })
        });
        if (res) {
            setuser({
                fname: "",
                lname: "",
                email: "",
                phone: "",
                message: "",
            })
            alert('sended successfully.')
        }
    }
    else{
        alert('File input fild')
    }
    }
    return (
        <>
        <div className="form_main_div">
                <div className="form_main">
                    <form method="post">
                    <div className="form_all_input">
                        <div>
                        <h4>Frist Name</h4>
                            <input type="text" name="fname"  value={user.fname} onChange={getuserdata} className="form_class_coman" required />
                        </div>
                        <div>
                        <h4>Last Name</h4>
                            <input type="text" name="lname" value={user.lname} onChange={getuserdata} className="form_class_coman" required />
                        </div>
                        <div>
                        <h4>Email</h4>
                            <input type="email" name="email" value={user.email} onChange={getuserdata} className="form_class_coman" required />
                        </div>
                        <div>
                        <h4>Phone Number</h4>
                            <input type="number" name="phone" value={user.phone} onChange={getuserdata} className="form_class_coman" required />
                        </div>
                        <div>
                        <h4>Message</h4>
                            <textarea name="message" value={user.message} onChange={getuserdata} className="form_class_coman address"></textarea>
                        </div>
                        <div className="form_submit_btn">
                            <button onClick={postdata}>Submit</button>
                        </div>
                    </div>
                        </form>
                </div>
            </div>
        </>
    )
}

export default Contectus
