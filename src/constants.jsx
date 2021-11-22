const CONTRACT_ADDRESS = '0x4dc975Cb2Fa5Ed0659EbC9b394408C3563eC15e8';

/*
 * Add this method and make sure to export it on the bottom!
 */
const transformCharacterData = (characterData) => {
	return {
		name: characterData.name,
		imageURI: characterData.imageURI,
		hp: characterData.hp.toNumber(),
		maxHp: characterData.maxHp.toNumber(),
		attackDamage: characterData.attackDamage.toNumber(),
	};
};

export { CONTRACT_ADDRESS, transformCharacterData };