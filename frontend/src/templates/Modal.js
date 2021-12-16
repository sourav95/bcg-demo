import * as React from 'react';
import './Modal.css';
import {useState, useRef} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default function ModalLayout(props) {
    const [data,setData] =useState(props.data)
    const [martialStatus, setMartialStatus] = useState(props.data.martialStatus)
    const [bodyInjury, setBodyInjury] = useState(props.data.bodyInjuryLiability)
    const [personalInjury, setPersonalInjury] = useState(props.data.personalInjuryProtection)
    const [propertyDamage, setPropertyDamage] = useState(props.data.propertyDamageLiability)
    const [comprehensive, setComprehensive] = useState(props.data.comprehension)
    const [collision, setCollision] = useState(props.data.collision)
    const [incomeGroup, setIncomeGroup] = useState(props.data.incomeGroup)
    const [gender, setGender] = useState(props.data.gender)
    
    const policyIdUpdated = useRef('')
    const customerIdUpdated = useRef('')
    const dateOfPurchaseUpdated = useRef('')
    const fuelTypeUpdated = useRef('')
    const vehicleSegmentUpdated = useRef('')
    const customergenderUpdated = useRef('')
    const customerIncomeGroupUpdated = useRef('')
    const customerRegionUpdated = useRef('')
    const customerMartialStatusUpdated = useRef('')
    var bodyInjuryUpdated = useRef('')
    const personalInjuryUpdated = useRef('')
    const propertyDamageUpdated = useRef('')
    const comprehensiveUpdated = useRef('')
    const collisionUpdated = useRef('')
    const premiumUpdated = useRef('')

    const boolOptions = [
        {    
            value: "No",
            label: "No"
        },
        {
            value: "Yes",
            label: "Yes"
        }
    ]
    const incomeGroupOptions = [
        {    
            value: "0- $25K",
            label: "0- $25K"
        },
        {
            value: "$25-$70K",
            label: "$25-$70K"
        },
        {
            value: ">$70K",
            label: ">$70K"
        }
    ]
    const genderOptions = [
        {    
            value: "Male",
            label: "Male"
        },
        {
            value: "Female",
            label: "Female"
        }
    ]
        
    function handleClose() {
        props.modalState(props.data, false);
    }
    function saveValues(){
        var queryString= "bodyInjuryLiability=" + bodyInjuryUpdated.current.value + 
            "&collision=" + collisionUpdated.current.value +
            "&collision=" + collisionUpdated.current.value+
            "&comprehension=" + comprehensiveUpdated.current.value+
            "&customerId=" + customerIdUpdated.current.value+
            "&dateOfPurchase=" + dateOfPurchaseUpdated.current.value+
            "&fuel=" + fuelTypeUpdated.current.value+
            "&gender=" + customergenderUpdated.current.value+
            "&incomeGroup=" + customerIncomeGroupUpdated.current.value+
            "&martialStatus=" + customerMartialStatusUpdated.current.value+
            "&personalInjuryProtection=" + personalInjuryUpdated.current.value+
            "&policyId=" + policyIdUpdated.current.value+
            "&propertyDamageLiability="+ propertyDamageUpdated.current.value+
            "&region="+ customerRegionUpdated.current.value+
            "&vehicleSegment="+ vehicleSegmentUpdated.current.value
        
        axios.get("http://localhost:8000/save-updated-data/?"+queryString).then((response) => {
            console.log(response.data)
            
        });
    }
  return (
      <div>
          <form>
            <div class="row">
                <TextField  inputRef={policyIdUpdated} label="Policy ID" variant="outlined" InputProps={{readOnly: true,}} defaultValue={data.policyId}/>
            </div>
            <br/>
            <div class="row">
                <div class="input-field">
                    <TextField inputRef={customerIdUpdated} label="Customer ID" variant="outlined" InputProps={{readOnly: true,}} defaultValue={data.customerId}/>
                </div>
                <div class="input-field">
                    <TextField inputRef={dateOfPurchaseUpdated} label="Date of Purchase" variant="outlined" InputProps={{readOnly: true,}} defaultValue={data.dateOfPurchase}/>
                </div>
                <div class="input-field">
                    <TextField  inputRef={fuelTypeUpdated} label="Fuel Type" variant="outlined" defaultValue={data.fuel}/>
                </div>
                <div class="input-field">
                    <TextField inputRef={vehicleSegmentUpdated} label="Vehicle Segment" variant="outlined" defaultValue={data.vehicleSegment}/>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="input-field">
                    <TextField inputRef={customergenderUpdated} fullWidth="true" select label="Gender" variant="outlined" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                        {
                            genderOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                        
                    </TextField>
                </div>    
                <div class="input-field">
                    <TextField inputRef={customerIncomeGroupUpdated} fullWidth="true" select label="Customer Income Group" variant="outlined" value={incomeGroup} onChange={(e)=>{setIncomeGroup(e.target.value)}}>
                        {
                            incomeGroupOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                        
                    </TextField>
                </div>
                <div class="input-field">
                    <TextField inputRef={customerRegionUpdated} id="outlined-basic" label="Customer Region" variant="outlined" defaultValue={data.region}/>
                </div>    
                <div class="input-field">
                    <TextField inputRef={customerMartialStatusUpdated} fullWidth="true" id="outlined-basic" select label="Customer Martial Status" variant="outlined" value={martialStatus} onChange={(e)=>{setMartialStatus(e.target.value)}}>
                        {
                            boolOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                    </TextField>
                </div>   
                
            </div>
            <br/>
            <div class="row">
                <div class="input-field">
                    <TextField inputRef={bodyInjuryUpdated} fullWidth="true" id="outlined-basic" select label="Body Injury Liability" variant="outlined" value={bodyInjury} onChange={(e)=>{setBodyInjury(e.target.value)}}>
                        {
                            boolOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <div class="input-field">    
                    <TextField inputRef={personalInjuryUpdated} fullWidth="true" id="outlined-basic" select label="Personal Injury protection" variant="outlined" value={personalInjury} onChange={(e)=>{setPersonalInjury(e.target.value)}}>
                        {
                            boolOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <div class="input-field">    
                    <TextField inputRef={propertyDamageUpdated} fullWidth="true" id="outlined-basic" select label="Property Damage Liability" variant="outlined" value={propertyDamage} onChange={(e)=>{setPropertyDamage(e.target.value)}}>
                        {
                            boolOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <div class="input-field">   
                    <TextField inputRef={comprehensiveUpdated} fullWidth="true" id="outlined-basic" select label="Comprehensive" variant="outlined" value={comprehensive} onChange={(e)=>{setComprehensive(e.target.value)}}>
                        {
                            boolOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                
                
            </div>
            <br/>
            <div class="row">
            <div class="input-field">
                <TextField inputRef={collisionUpdated} fullWidth="true" id="outlined-basic" select label="Collision" variant="outlined" value={collision} onChange={(e)=>{setCollision(e.target.value)}}>
                        {
                            boolOptions.map((option)=>(
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                            ))
                        }
                    </TextField>
            </div>
            </div>
            <br/>
            <div class="input-field">
                <TextField inputRef={premiumUpdated} id="outlined-basic" label="Premium" variant="outlined" value={data.premium}/>
            </div>
            <br/>
                <div class="row">
                    <div class="button-field">
                        <Button variant="contained" onClick={saveValues}>Save</Button>
                    </div>
                    <div class="button-field">
                        <Button variant="contained" onClick={handleClose}>Close</Button>
                    </div>
                </div>
          </form>
      </div>
  );
}