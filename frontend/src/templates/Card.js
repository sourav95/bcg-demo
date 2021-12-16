import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'
import { padding } from '@mui/system';








export default function OutlinedCard(props) {
    function handleEditClick() {
        props.modalState(props.policyDetails, true);
    }
  return (
      <div>
        <Box sx={{ minWidth: 275, padding:2}}>
        <Card variant="outlined" class="card">
        <React.Fragment>
            <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    <b>Policy Id:</b> {props.policyDetails.policyId}
                </Typography>
                <div class="row-header">
                    <Typography variant="h6" color="white" gutterBottom>
                        <b>Policy Details</b>
                    </Typography>
                </div>
                <div class="row">
                    <Typography  class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Customer Id: {props.policyDetails.customerId}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Date of Purchase: {props.policyDetails.dateOfPurchase}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Fuel type: {props.policyDetails.fuel}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Vehicle Segment: {props.policyDetails.vehicleSegment}
                    </Typography>
                </div>
                <div class="row-header">
                    <Typography variant="h6" color="white" gutterBottom>
                        <b>Customer Details</b>
                    </Typography>
                </div>
                
                <div class="row">
                    <Typography  class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Gender: {props.policyDetails.gender}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Customer Income Group: {props.policyDetails.incomeGroup}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Customer Region: {props.policyDetails.region}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Customer Martial Status: {props.policyDetails.martialStatus}
                    </Typography>
                </div>
                <div class="row-header">
                    <Typography variant="h6" color="white" gutterBottom>
                        <b>Coverage details</b>
                    </Typography>
                </div>
                <div class="row">
                    <Typography  class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Body Injury Liability: {props.policyDetails.bodyInjuryLiability}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Personal Injury protection: {props.policyDetails.personalInjuryProtection}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Property Damage Liability: {props.policyDetails.propertyDamageLiability}
                    </Typography>
                    <Typography class= "row-element" sx={{ mb: 1.5 }} variant="body2">
                        Comprehensive: {props.policyDetails.comprehension}
                    </Typography>
                </div>
            <div>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    <b>Collision:</b> {props.policyDetails.collision}
                </Typography>
            </div>
            <Typography variant="h6" color="text.secondary" gutterBottom>
                <b>Premium:</b> {props.policyDetails.premium}
            </Typography>
            </CardContent>
        <CardActions>
        <Button size="small" variant="contained" onClick={handleEditClick}>Edit</Button>
        
        </CardActions>
        </React.Fragment>
        </Card>
        </Box>
        
        </div>
  );
}
