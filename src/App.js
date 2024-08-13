import { useState } from "react";
import CreateForm from "./CreateForm/index";
import StudentTable from "./StudentTable/index";

import { Box, Grid } from '@mui/material';


const App = () => {

	const [todo, setTodo] = useState([]);
	const [value, setValue] = useState({ id: 0, firstname: "", lastname: "", email: "" });

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid item xs={5}>
						<CreateForm value={value} setValue={setValue} setTodo={setTodo} />
					</Grid>
					<Grid item xs={6}>
						<StudentTable todo={todo} />
					</Grid>
				</Grid>
			</Box>
		</>
	);
}

export default App;
