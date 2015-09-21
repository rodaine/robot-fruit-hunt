EAST  = EAST  || 1;
NORTH = NORTH || 2;
WEST  = WEST  || 3;
SOUTH = SOUTH || 4;
TAKE  = TAKE  || 5;
PASS  = PASS  || 6;

/** @const */
module.exports = {
	north: {
		value: NORTH,
		text: 'North',
		transform: [0, -1],
		isMove: true
	},
	south: {
		value: SOUTH,
		text: 'South',
		transform: [0, 1],
		isMove: true
	},
	east: {
		value: EAST,
		text: 'East',
		transform: [1, 0],
		isMove: true
	},
	west: {
		value: WEST,
		text: 'West',
		transform: [-1, 0],
		isMove: true
	},
	take: {
		value: TAKE,
		text: 'Take',
		transform: [0, 0],
		isMove: false
	},
	pass: {
		value: PASS,
		text: 'Pass',
		transform: [0, 0],
		isMove: false
	}
};
