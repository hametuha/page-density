import { getEAW } from "meaw";

export function convertAsianWidth( text ) {
	let total = 0;
	text.split('').map( ( char ) => {
		total += -1 < [ 'F', 'W' ].indexOf( getEAW( char ) ) ? 1 : 0.5;
	} );
	return total;
}

export function getPageDensity( text, separator = "\n", lines = 18, chars = 40 ) {
	let whiteSpaces = 0;
	let totalLines = 0;
	for ( const line of text.split( separator ) ) {
		const lineTotal = convertAsianWidth( line );
		// Add total character length.
		totalLines += Math.floor( lineTotal / chars );
		const leftChars = lineTotal % chars;
		if ( 0 < leftChars ) {
			totalLines++;
		}
		// Count white spaces in line.
		line.split(  '' ).filter( ( char ) => /\s/.test( char ) ).map( ( char ) => {
			whiteSpaces += convertAsianWidth( char );
		} );
		// Add padding letters.
		whiteSpaces += chars - leftChars;
	}
	let totalPage = Math.ceil( totalLines / lines );
	return {
		totalLines,
		whiteSpaces,
		ratio: whiteSpaces / ( totalLines * chars ),
		totalPage,
	}
}
