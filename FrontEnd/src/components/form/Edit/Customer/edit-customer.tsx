import { useState, useEffect } from "react";
import "./edit-customer.scss";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { DataCustomer } from "@/components/customer-list/table/DataTable";

interface EditCustomerProps {
  customer: DataCustomer;
  onSave: (updatedCustomer: DataCustomer) => void;
  onClose: () => void;
}

export const EditCustomer = ({ customer, onSave, onClose }: EditCustomerProps) => {
  const [formData, setFormData] = useState({
    id: customer.id,
    name: customer.name,
    phone: customer.phone,
    sex: customer.sex,
    registrationDate: customer.registrationDate ? dayjs(customer.registrationDate) : null,
  });

  useEffect(() => {
    setFormData({
      id: customer.id,
      name: customer.name,
      phone: customer.phone,
      sex: customer.sex,
      registrationDate: customer.registrationDate ? dayjs(customer.registrationDate) : null,
    });
  }, [customer]);

  const handleChange = (field: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const updatedCustomer: DataCustomer = {
      ...formData,
      registrationDate: formData.registrationDate
        ? formData.registrationDate.format("dddd, M/D/YY h:mm A")
        : "",
    };
    onSave(updatedCustomer);
    onClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="modal-overlay">
        <div className="modal-content">
          {/* Close Button */}
          <button className="close-button" onClick={onClose}>X</button>
          
          <h3 className="title-add">EDIT CUSTOMER</h3>
          <div className="add-info-box">
            
            {/* ID Field (disabled) */}
            <TextField
              className="customer-id"
              label="ID"
              value={formData.id}
              variant="outlined"
              disabled
              margin="normal"
            />

            {/* Name and Sex Fields on the Same Row */}
            <div className="row">
              <TextField
                className="customer-name"
                label="Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                margin="normal"
              />
              <FormControl margin="normal" className="customer-sex">
                <InputLabel htmlFor="sex-native">Sex</InputLabel>
                <NativeSelect
                  value={formData.sex}
                  onChange={(e) => handleChange("sex", e.target.value)}
                  inputProps={{
                    name: 'sex',
                    id: 'sex-native',
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </NativeSelect>
              </FormControl>
            </div>

            {/* Phone Field */}
            <TextField
              className="customer-phone"
              label="Phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              fullWidth
              margin="normal"
            />

            {/* Registration Date Field */}
            <DateTimePicker
              className="customer-registration-date"
              label="Registration Date"
              value={formData.registrationDate}
              onChange={(newValue) => handleChange("registrationDate", newValue)}
              viewRenderers={{
                hours: null,
                minutes: null,
                seconds: null,
              }}
            />
          </div>

          {/* Buttons */}
          <div className="button-container">
            <Button variant="contained" className="button-cancel" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" className="button-save" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};
