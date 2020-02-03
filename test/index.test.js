/**
 * Tests
 */

import { getPageDensity, convertAsianWidth } from "../src";

test( 'Asian width.', () => {
  let str = 'あいうえお　 かきくけこ！!';
  expect( convertAsianWidth( str ) ).toBe( 13 );
  str = 'あ いう えお';
  expect( convertAsianWidth( str ) ).toBe( 6 );
  str = 'Brown fox jump';
  expect( convertAsianWidth( str ) ).toBe( 7 );
} );

test( 'Small text properties', () => {
  const sample = `こんにちは、これはテストです。
面白いですね。`;
  const result = getPageDensity( sample, "\n", 2, 15 );
  expect( result.totalLines )
    .toBe( 2 );
  expect( result.totalPage )
    .toBe( 1 );
} );
