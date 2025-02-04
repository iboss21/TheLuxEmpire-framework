_itemsSource["prego"] = {
	{
		name = "lasagna",
		label = "Lasagna",
		price = 100,
		isUsable = true,
		isRemoved = true,
		isStackable = 5,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
			Ignore = {
				PLAYER_STRESS = 12,
			},
		},
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
	},
	{
		name = "ravioli",
		label = "Ravioli",
		price = 100,
		isUsable = true,
		isRemoved = true,
		isStackable = 5,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
                PLAYER_THIRST = 10,
			},
		},
        stressTicks = { "3", "3", "3", "5", "5", "5", },
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
        armourModifier = 10,
	},
	{
		name = "fettuccini_alfredo",
		label = "Fettuccini Alfredo",
		price = 100,
		isUsable = true,
		isRemoved = true,
		isStackable = 5,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
		},
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
	},
	{
		name = "tiramisu",
		label = "Tiramisu",
		price = 65,
		isUsable = true,
		isRemoved = true,
		isStackable = 15,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 50,
				PLAYER_THIRST = 50,
			},
			Ignore = {
				PLAYER_STRESS = 20,
			},
		},
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
		energyModifier = {
			modifier = 1.1,
			duration = 2, -- not seconds?
			cooldown = 60, -- seconds
			skipScreenEffects = true,
		}
	},
}