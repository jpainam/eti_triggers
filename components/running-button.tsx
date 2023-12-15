import React from "react";
import { Button } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export default function RunningButton(props: { label: string; variant: string; }) {
	const { label, variant } = props;
	return (
		<Button size="lg" variant={variant} disabled style={{ cursor: "default" }}>
			<Spinner animation="border" /> {""}
		</Button>
	);
}
