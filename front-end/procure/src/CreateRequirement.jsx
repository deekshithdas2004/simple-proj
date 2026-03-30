import React, { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function CreateRequirement() {
    const [purchaseReq, setPurchaseRequest] = useState({
        reqNo: "",
        vesselName: "",
        department: "",
        date: "",
        country: "",
        port: "",
        priority: "",
        buyerRemarks: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setPurchaseRequest((prevVals) => ({ ...prevVals, [name]: value }));
    }

    console.log("Submitted Data:", purchaseReq);

    function handleOrderNow(e) {
        e.preventDefault(); // ✅ prevent refresh

        axios.post("http://localhost:7000/createRequest", purchaseReq)
            .then((ack) => {
                alert(ack.data); // ✅ alert will work now
            })
            .catch((err) => {
                console.log(err);
                alert("Error connecting to server");
            });
    }

    const options = ['The Godfather', 'Pulp Fiction']

    const priority = ['Immediate', 'Delay', 'Critical']

    return (
        <div className="createRequestWrapper">
            <div className="headersection1">
                <p className="pageTitle">Create Request</p>
                <img
                    src="https://th.bing.com/th/id/OIP.1BR7rsz507EsDuMhF09PFgHaKr?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="anchor"
                    width={30}
                    height={30}
                />
            </div>

            <form className="formContainer">
                <div className="grid">
                    <TextField id="outlined-basic" label="PR NO" variant="outlined" size="small" onChange={handleChange} />

                    <TextField id="vesselName" label="Vessel Name" variant="outlined" size="small" onChange={handleChange} />


                    <select
                        name="department"
                        id="department"
                        onChange={handleChange}
                        className="dropdown"
                    >
                        <option value="Engine">Engine</option>
                        <option value="Deck">Deck</option>
                        <option value="Galley">Galley</option>
                    </select>

                    <input
                        type="datetime-local"
                        name="date"
                        id="date"
                        onChange={handleChange}
                        className="datepicker"
                    />

                    <select
                        name="country"
                        id="country"
                        onChange={handleChange}
                        className="dropdown"
                    >
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                    </select>

                    <select
                        name="port"
                        id="port"
                        onChange={handleChange}
                        className="dropdown"
                    >
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Mangalore">Mangalore</option>
                    </select>

                    <Autocomplete
                        disablePortal
                        options={priority}
                        sx={{ width: 300, height: "35px" }}
                        renderInput={(params) => <TextField {...params} label="Priority" onChange={handleChange} />}
                    />

                    <textarea
                        name="buyerRemarks"
                        id="buyerRemarks"
                        placeholder="Remark to Seller"
                        required
                        onChange={handleChange}
                        className="remarks"
                    />

                    <Autocomplete
                        disablePortal
                        options={options}
                        sx={{ width: 300, height: "35px" }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />

                    <Button
                        color="success" variant="contained" size="small"
                        sx={{
                            height: "35px",
                            width: "100px",
                            textTransform: "capitalize"
                        }}
                        onClick={handleOrderNow}
                    >
                        Order
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default CreateRequirement;