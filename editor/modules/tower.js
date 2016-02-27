define('tower', {
	tileAction: new vg.Signal(),
	objAction: new vg.Signal(),
	userAction: new vg.Signal(),

	save: new vg.Signal(),

	TILE_CHANGE_HEIGHT: 'cell.change.height',
	TILE_ADD: 'cell.add',
	TILE_REMOVE: 'cell.remove',
	TILE_CHANGE_WALKABLE: 'cell.change.walkable',
});