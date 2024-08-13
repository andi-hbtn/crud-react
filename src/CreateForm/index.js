import { TextField, Button } from '@mui/material';
import "./index.css";

const CreateForm = (props) => {

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		props.setValue((prev) => {
			return { ...prev, [name]: value }
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		props.setTodo((prev) => {
			console.log("prev-----", prev);
			return [...prev, props.value]
		});
		props.setValue({ firstname: "", lastname: "", email: "" })
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-container">
					<div className="form-field">
						<TextField id="outlined-basic" label="Firstname" variant="outlined" value={props.value.firstname} name="firstname" onChange={handleChange} />
					</div>
					<div className="form-field">
						<TextField id="outlined-basic" label="Lastname" variant="outlined" value={props.value.lastname} name="lastname" onChange={handleChange} />
					</div>
					<div className="form-field">
						<TextField id="outlined-basic" label="Email" variant="outlined" value={props.value.email} name="email" onChange={handleChange} />
					</div>
					<div className="buton-container">
						<Button variant="contained" type="submit">create</Button>
					</div>
				</div>
			</form>
		</>
	)
}

export default CreateForm;