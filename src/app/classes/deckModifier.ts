import { Character } from './character';

export class DeckModifier {
  name: string; // Name of the perk
  uses: Array<{ used: boolean }>; // Array to track number of uses
  applyToCharacter: (char: Character) => void; // Action taken when perk is selected, anonymous function from the constants below

  constructor(name: string, uses: number, set: (char: Character) => void, useValue = false) {
    this.name = name;
    this.uses = Array<{ used: boolean }>();

    for (let i = 0; i < uses; i++) {
      this.uses.push({ used: useValue });
    }
    this.applyToCharacter = set;
  }
}

export const NEG_SCENARIO_EFFECTS_LIST = {
  '-1': (char: Character) => char.deck.addCard('-1', 'None', 1),
  Curse: (char: Character) => char.deck.addCard('Curse', 'None', 1)
};

export const NEG_ITEM_EFFECTS_LIST = {
  '-1': (char: Character) => char.deck.addCard('-1', 'None', 1)
};
export const POS_ITEM_EFFECTS_LIST = {
  '-1': (char: Character) => char.deck.addCard('-1', 'None', -1)
};

export const MISC_MODIFIERS_LIST = {
  '+1': (char: Character) => char.deck.addCard('+1', 'None', 1),
  Bless: (char: Character) => char.deck.addCard('Bless', 'None', 1)
};

export const PERK_LIST = {
  'Add one (-1) DARK card': (char: Character) => { char.deck.addCard('-1', 'Dark', 1); },
  'Add one (-1) \'Add one Counter\' card': (char: Character) => { char.deck.addCard('-1', 'Add one Counter', 1); },
  'Add one (+0) ADD TARGET card': (char: Character) => { char.deck.addCard('+0', 'Add Target', 1); },
  'Add one (+0) STUN card': (char: Character) => { char.deck.addCard('+0', 'Stun', 1); },
  'Add one (+0) Refresh and item card': (char: Character) => { char.deck.addCard('+0', 'Refresh an item', 1); },
  'Add one (+0) All adjacent enemies suffer 1 damage card': (char: Character) => { char.deck.addCard('+0', 'All adj. enemies suffer 1 damage', 1); },
  'Add one (+1) CURSE card': (char: Character) => { char.deck.addCard('+1', 'Curse', 1); },
  'Add one (+1) HEAL 2 card': (char: Character) => { char.deck.addCard('+1', 'Heal 2', 1); },
  'Add one (+1) HEAL 1 (Ally) card': (char: Character) => { char.deck.addCard('+1', 'Heal 1 (Ally)', 1); },
  'Add one (+1) IMMOBILIZE card': (char: Character) => { char.deck.addCard('+1', 'Immobilize', 1); },
  'Add one (+1) INVISIBLE card': (char: Character) => { char.deck.addCard('+1', 'Invisible', 1); },
  'Add one (+1) WOUND card': (char: Character) => { char.deck.addCard('+1', 'Wound', 1); },
  'Add one (+1) WIND card': (char: Character) => { char.deck.addCard('+1', 'Wind', 1); },
  'Add one (+1) POISON card': (char: Character) => { char.deck.addCard('+1', 'Poison', 1); },
  'Add one (+1) FIRESUN card': (char: Character) => { char.deck.addCard('+1', 'Fire / Sun', 1); },
  'Add one (+1) REGENERATE, Self card': (char: Character) => { char.deck.addCard('+1', 'Regenerate, Self', 1); },
  'Add one (+2) FIRE card': (char: Character) => { char.deck.addCard('+2', 'Fire', 1); },
  'Add one (+2) WIND card': (char: Character) => { char.deck.addCard('+2', 'Wind', 1); },
  'Add one (+2) FROST card': (char: Character) => { char.deck.addCard('+2', 'Frost', 1); },
  'Add one (+2) MUDDLE card': (char: Character) => { char.deck.addCard('+2', 'Muddle', 1); },
  'Add one (+2) DARK card': (char: Character) => { char.deck.addCard('+2', 'Dark', 1); },
  'Add one (+2) card': (char: Character) => { char.deck.addCard('+2', 'None', 1); },
  'Add one (+1) SHIELD 1, Self card': (char: Character) => { char.deck.addCard('+1', 'Shield 1, Self', 1); },
  'Add one (+1) SHIELD 1 card': (char: Character) => { char.deck.addCard('+1', 'Shield 1', 1); },
  'Add one (+3) card': (char: Character) => { char.deck.addCard('+3', 'None', 1); },
  'Add one (-2) card and two (+2) cards': (char: Character) => {
    char.deck.addCard('-2', 'None', 1);
    char.deck.addCard('+2', 'None', 2);
  },
  'Add one ROLLING (+1) DISARM card': (char: Character) => { char.deck.addCard('r+1', 'Rolling Disarm', 1); },
  'Add one ROLLING (+2) card': (char: Character) => { char.deck.cards['r+2'] += 1; },
  'Add two (+1) cards': (char: Character) => { char.deck.addCard('+1', 'None', 2); },
  'Add two (+1) PUSH 1 cards': (char: Character) => { char.deck.addCard('+1', 'Push 1', 2); },
  'Add two ROLLING (+1) cards': (char: Character) => { char.deck.cards['r+1'] += 2; },
  'Add three ROLLING (+1) cards': (char: Character) => { char.deck.cards['r+1'] += 3; },
  'Add three (+0) FIRE cards': (char: Character) => { char.deck.addCard('+0', 'Fire', 3); },
  'Add three (+0) FROST cards': (char: Character) => { char.deck.addCard('+0', 'Frost', 3); },
  'Add three (+0) WIND cards': (char: Character) => { char.deck.addCard('+0', 'Wind', 3); },
  'Add three (+0) EARTH cards': (char: Character) => { char.deck.addCard('+0', 'Earth', 3); },
  'Ignore negative scenario effects': (char: Character) => { char.ignoreNegScenarioEffects = true; },
  'Ignore negative scenario effects and add one (+1) card': (char: Character) => {
    char.ignoreNegScenarioEffects = true;
    char.deck.addCard('+1', 'None', 1);
  },
  'Ignore negative scenario effects and add two (+1) cards': (char: Character) => {
    char.ignoreNegScenarioEffects = true;
    char.deck.addCard('+1', 'None', 2);
  },
  'Ignore negative scenario effects and remove two (+0) cards': (char: Character) => {
    char.ignoreNegScenarioEffects = true;
    char.deck.addCard('+0', 'None', -2);
  },
  'Ignore negative scenario effects and remove one (-1) card': (char: Character) => {
    char.ignoreNegScenarioEffects = true;
    char.deck.addCard('-1', 'None', -1);
  },
  'Ignore negative item effects': (char: Character) => { char.ignoreNegItemEffects = true; },
  'Ignore negative item effects and add one (+1) card': (char: Character) => {
    char.ignoreNegItemEffects = true;
    char.deck.addCard('+1', 'None', 1);
  },
  'Ignore negative item effects and add one (-1) card': (char: Character) => {
    char.ignoreNegItemEffects = true;
    char.deck.addCard('-1', 'None', 1);
  },
  'Ignore negative item effects and add two (+1) cards': (char: Character) => {
    char.ignoreNegItemEffects = true;
    char.deck.addCard('+1', 'None', 2);
  },
  'Ignore negative item effects and remove one (-1) card': (char: Character) => {
    char.ignoreNegItemEffects = true;
    char.deck.addCard('-1', 'None', -1);
  },
  'Remove four (+0) cards': (char: Character) => { char.deck.addCard('+0', 'None', -4); },
  'Remove two (-1) cards': (char: Character) => { char.deck.addCard('-1', 'None', -2); },
  'Remove one (-2) card': (char: Character) => { char.deck.addCard('-2', 'None', -1); },
  'Remove one (-2) card and one (+1) card': (char: Character) => {
    char.deck.addCard('-2', 'None', -1);
    char.deck.addCard('+1', 'None', -1);
  },
  'Replace one (-1) DARK card with one (+1) DARK card': (char: Character) => {
    char.deck.addCard('-1', 'Dark', -1);
    char.deck.addCard('+1', 'Dark', 1);
  },
  'Replace one (-1) card with one (+0) STUN card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+0', 'Stun', 1);
  },
  'Replace one (-1) card with one (+0) HEAL 1 (Ally) card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+0', 'Heal 1 (Ally)', 1);
  },
  'Replace one (-1) card with one (+1) HEAL 2, Affect any ally card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+1', 'Heal 2, Affect any ally', 1);
  },
  'Replace one (-1) card with one (+0) POISON card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+0', 'Poison', 1);
  },
  'Replace one (+0) card with one (+2) card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'None', 1);
  },
  'Replace one (+0) card with one (+2) WOUND card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'Wound', 1);
  },
  'Replace one (-1) card with one (+0) WOUND card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+0', 'Wound', 1);
  },
  'Replace one (+0) card with one (+2) POISON card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'Poison', 1);
  },
  'Replace one (+0) card with one (+2) CURSE card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'Curse', 1);
  },
  'Replace one (+0) card with one (+2) MUDDLE card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'Muddle', 1);
  },
  'Replace one (+0) card with one (+3) MUDDLE card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+3', 'Muddle', 1);
  },
  'Replace one (+0) card with one (+1) IMMOBILIZE card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Immobilize', 1);
  },
  'Replace one (+0) card with one (+1) DISARM card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Disarm', 1);
  },
  'Replace one (+0) card with one (+1) DARK card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Dark', 1);
  },
  'Replace one (+0) card with one (+1) FROST card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Frost', 1);
  },
  'Replace one (+0) card with one ROLLING (+2) card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.cards['r+2'] += 1;
  },
  'Replace one (+0) card with one (+0) STUN card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+0', 'Stun', 1);
  },
  'Replace one (+0) card with one (+1) SHIELD 1, Affect any ally card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Shield 1, Affect any ally', 1);
  },
  'Replace one (-1) card with one ROLLING SHIELD 1 card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addEffect('Shield 1', 1);
  },
  'Replace one (+0) card with one (+1) POISON card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Poison', 1);
  },
  'Replace one (+0) card with one (+1) WOUND card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Wound', 1);
  },
  'Replace one (+0) card with one (+1) PUSH card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Push', 1);
  },
  'Replace one (+0) card with one (+2) DARK card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'Dark', 1);
  },
  'Replace one (+0) card with one (+2) SUN card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'Sun', 1);
  },
  'Replace one (+0) card with one (+2) REGENERATE , Self card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+2', 'Regenerate, Self', 1);
  },
  'Replace one (+1) card with one (+1) STUN card': (char: Character) => {
    char.deck.addCard('+1', 'None', -1);
    char.deck.addCard('+1', 'Stun', 1);
  },
  'Replace one (+1) card with one (+2) EARTH card': (char: Character) => {
    char.deck.addCard('+1', 'None', -1);
    char.deck.addCard('+2', 'Earth', 1);
  },
  'Replace one (+1) card with one (+2) FIRE card': (char: Character) => {
    char.deck.addCard('+1', 'None', -1);
    char.deck.addCard('+2', 'Fire', 1);
  },
  'Replace one (+1) card with one (+2) SUN card': (char: Character) => {
    char.deck.addCard('+1', 'None', -1);
    char.deck.addCard('+2', 'Sun', 1);
  },
  'Replace one (+1) card with one (+3) card': (char: Character) => {
    char.deck.addCard('+1', 'None', -1);
    char.deck.addCard('+3', 'None', 1);
  },
  'Replace one (-1) card with one (+1) card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+1', 'None', 1);
  },
  'Replace one (-2) card with one (+0) card': (char: Character) => {
    char.deck.addCard('-2', 'None', -1);
    char.deck.addCard('+0', 'None', 1);
  },
  'Replace one (-2) card with one (-1) card and one (+1) card': (char: Character) => {
    char.deck.addCard('-2', 'None', -1);
    char.deck.addCard('-1', 'None', 1);
    char.deck.addCard('+1', 'None', 1);
  },
  'Replace two (+1) cards with two (+2) cards': (char: Character) => {
    char.deck.addCard('+1', 'None', -2);
    char.deck.addCard('+2', 'None', 2);
  },
  'Replace two (+0) cards with two (+1) cards': (char: Character) => {
    char.deck.addCard('+0', 'None', -2);
    char.deck.addCard('+1', 'None', 2);
  },
  'Replace two (+1) with two (+2) cards': (char: Character) => {
    char.deck.addCard('+1', 'None', -2);
    char.deck.addCard('+2', 'None', 2);
  },
  'Replace two (+1) cards with one (+3) SHIELD 1, Self card': (char: Character) => {
    char.deck.addCard('+1', 'None', -2);
    char.deck.addCard('+3', 'Shield 1, Self', 1);
  },
  'Replace two (+1) cards with one (+4) card': (char: Character) => {
    char.deck.addCard('+1', 'None', -2);
    char.deck.addCard('+4', 'None', 1);
  },
  'Replace two (+0) cards with one (+0) FIRE and one (+0) EARTH card': (char: Character) => {
    char.deck.addCard('+0', 'None', -2);
    char.deck.addCard('+0', 'Fire', 1);
    char.deck.addCard('+0', 'Earth', 1);
  },
  'Replace two (+0) cards with one (+0) FROST and one (+0) WIND card': (char: Character) => {
    char.deck.addCard('+0', 'None', -2);
    char.deck.addCard('+0', 'Frost', 1);
    char.deck.addCard('+0', 'Wind', 1);
  },
  // Banner Spear specific
  'Replace one (+0) card with one (+1) Add +1 Attack for each adjacent to the target card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', '+1 Attack for each adjacent to the target', 1);
  },
  'Add one (+1) DISARM card': (char: Character) => {
    char.deck.addCard('+1', 'Disarm', 1);
  },
  'Add one (+2) PUSH 1 card': (char: Character) => {
    char.deck.addCard('+2', 'Push 1', 1);
  },
  // Blink Blade specific
  // tslint:disable-next-line:max-line-length
  'Replace one (+0) card with one "Place this card in your active area. On your next attack, discard this card to add +2 ATTACK ROLLING " card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addEffect('Next attack, +2 Attack Rolling', 1);
  },
  'Add one (-1) Gain 1 TIME_TOKEN card': (char: Character) => {
    char.deck.addCard('-1', 'Gain 1 Time Token', 1);
  },
  'Add one (+2) REGENERATE, self ROLLING card': (char: Character) => {
    char.deck.addCard('r+2', 'Regenerate, self', 1);
  },
  // Deathwalker specific
  'Replace one (+0) card with one (+1) CURSE card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+1', 'Curse', 1);
  },
  'Add one DISARM ROLLING and one MUDDLE ROLLING card': (char: Character) => {
    char.deck.addEffect('Disarm', 1);
    char.deck.addEffect('Muddle', 1);
  },
  'Add two HEAL 1, TARGET 1 ally ROLLING cards': (char: Character) => {
    char.deck.addEffect('Heal 1, one ally', 2);
  },
  // Deepwraith specific
  'Replace one (-1) card with one (+0) DISARM card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+0', 'Disarm', 1);
  },
  'Replace one (-2) card with one (+1) STUN card': (char: Character) => {
    char.deck.addCard('-2', 'None', -1);
    char.deck.addCard('-1', 'Stun', 1);
  },
  'Replace one (+0) card with one (+0) INVISIBLE, self card': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addCard('+0', 'Invisible, self', 1);
  },
  'Replace one (+0) card with two PIERCE 3 ROLLING cards': (char: Character) => {
    char.deck.addCard('+0', 'None', -1);
    char.deck.addEffect('Pierce 3 rolling', 2);
  },
  'Replace three (+1) cards with three (+1) CURSE cards': (char: Character) => {
    char.deck.addCard('+1', 'None', -3);
    char.deck.addCard('+1', 'Curse', 3);
  },
  'Add two (+1) Gain 1 TROPHY cards': (char: Character) => {
    char.deck.addCard('+1', 'Gain 1 Trophy', 2);
  },
  // Trapper specific
  'Replace one (-1) card with one (+0) "Create one HEAL 2 trap in an empty hex adjacent to the target" card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+0', 'Create one Heal 2 trap', 1);
  },
  'Replace one (-1) card with one (+0) "Create one DAMAGE 1 trap in an empty hex adjacent to the target" card': (char: Character) => {
    char.deck.addCard('-1', 'None', -1);
    char.deck.addCard('+0', 'Create one Damage 1 trap', 1);
  },
  'Replace two (+0) cards with two (+0) "Add DAMAGE 2 or HEAL 2 to a trap within RANGE 2 of you" cards': (char: Character) => {
    char.deck.addCard('+0', 'None', -2);
    char.deck.addCard('+0', 'Add 2 Damage or Heal to trap', 2);
  },
  'Replace two (+1) cards with two (+2) IMMOBILIZE cards': (char: Character) => {
    char.deck.addCard('+1', 'None', -2);
    char.deck.addCard('+2', 'Immobilize', 2);
  },
  'Add two Add \" PUSH 2 od PULL 2\" ROLLING cards': (char: Character) => {
    char.deck.addEffect('Pull 2 or Push 2 Rolling', 2);
  },
  // Effect only perks
  'Add two ROLLING PUSH 2 cards': (char: Character) => { char.deck.addEffect('Rolling Push 2', 2); },
  'Add two ROLLING EARTH cards': (char: Character) => { char.deck.addEffect('Rolling Earth', 2); },
  'Add two ROLLING WIND cards': (char: Character) => { char.deck.addEffect('Rolling Wind', 2); },
  'Add two ROLLING FIRE cards': (char: Character) => { char.deck.addEffect('Rolling Fire', 2); },
  'Add two ROLLING PIERCE 3 cards': (char: Character) => { char.deck.addEffect('Rolling Pierce 3', 2); },
  'Add two ROLLING POISON cards': (char: Character) => { char.deck.addEffect('Rolling Poison', 2); },
  'Add two ROLLING MUDDLE cards': (char: Character) => { char.deck.addEffect('Rolling Muddle', 2); },
  'Add two ROLLING IMMOBILIZE cards': (char: Character) => { char.deck.addEffect('Rolling Immobilize', 2); },
  'Add two ROLLING HEAL 1 cards': (char: Character) => { char.deck.addEffect('Rolling Heal 1', 2); },
  'Add two ROLLING HEAL 1, Self cards': (char: Character) => { char.deck.addEffect('Rolling Heal 1, Self', 2); },
  'Add one ROLLING HEAL 2, Ally card': (char: Character) => { char.deck.addEffect('Rolling Heal 2, Ally', 1); },
  'Add one ROLLING HEAL 3 card': (char: Character) => { char.deck.addEffect('Rolling Heal 3', 1); },
  // 'Add two ROLLING STUN cards': (char: Character) => { char.deck.addEffect('Rolling Stun', 2); },
  'Add two ROLLING WOUND cards': (char: Character) => { char.deck.addEffect('Rolling Wound', 2); },
  'Add two ROLLING SUN cards': (char: Character) => { char.deck.addEffect('Rolling Sun', 2); },
  'Add two ROLLING CURSE cards': (char: Character) => { char.deck.addEffect('Rolling Curse', 2); },
  'Add two ROLLING SHIELD 1, Self cards': (char: Character) => { char.deck.addEffect('Rolling Shield 1, Self', 2); },
  'Add one ROLLING \'Move back one character token\' card': (char: Character) => {
    char.deck.addEffect('Move back one character token', 1);
  },
  'Add one ROLLING INVISIBLE card': (char: Character) => { char.deck.addEffect('Rolling Invisible', 1); },
  'Add one ROLLING STUN card': (char: Character) => { char.deck.addEffect('Rolling Stun', 1); },
  'Add one ROLLING DISARM and one ROLLING MUDDLE card': (char: Character) => {
    char.deck.addEffect('Rolling Disarm', 1);
    char.deck.addEffect('Rolling Muddle', 1);
  },
  'Add one ROLLING EARTH and one ROLLING WIND card': (char: Character) => {
    char.deck.addEffect('Rolling Earth', 1);
    char.deck.addEffect('Rolling Wind', 1);
  },
  'Add one ROLLING SUN and one ROLLING DARK card': (char: Character) => {
    char.deck.addEffect('Rolling Sun', 1);
    char.deck.addEffect('Rolling Dark', 1);
  },
  'Add one ROLLING FIRE and one ROLLING WIND card': (char: Character) => {
    char.deck.addEffect('Rolling Fire', 1);
    char.deck.addEffect('Rolling Wind', 1);
  },
  'Add one ROLLING DARK and one ROLLING EARTH card': (char: Character) => {
    char.deck.addEffect('Rolling Dark', 1);
    char.deck.addEffect('Rolling Earth', 1);
  },
  'Add one ROLLING ADD TARGET card': (char: Character) => { char.deck.addEffect('Rolling Add Target', 1); },
  'Add three ROLLING PUSH 1 cards': (char: Character) => { char.deck.addEffect('Rolling Push 1', 3); },
  'Add three ROLLING PULL 1 cards': (char: Character) => { char.deck.addEffect('Rolling Pull 1', 3); },
  'Add three ROLLING MUDDLE cards': (char: Character) => { char.deck.addEffect('Rolling Muddle', 3); },
  'Add three ROLLING POISON cards': (char: Character) => { char.deck.addEffect('Rolling Poison', 3); },
};
