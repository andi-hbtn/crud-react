import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material/';

export default function StudentTable(props) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell align="left">ID</TableCell>
						<TableCell align="left">Firstname</TableCell>
						<TableCell align="left">Lastname</TableCell>
						<TableCell align="left">Email</TableCell>
						<TableCell align="left">Edit</TableCell>
						<TableCell align="left">Delete</TableCell>

					</TableRow>
				</TableHead>
				<TableBody>
					{props.todo.map((el, index) => (
						<TableRow
							key={index}
						>
							<TableCell >
								{index + 1}
							</TableCell>
							<TableCell >
								{el.firstname}
							</TableCell>
							<TableCell>
								{el.lastname}
							</TableCell>
							<TableCell >{el.email}</TableCell>
							<TableCell>
								<Button variant="contained" type="submit">Edit</Button>
							</TableCell>
							<TableCell>
								<Button variant="contained" type="submit" color="error">Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
