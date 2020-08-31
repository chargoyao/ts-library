import { getPlural } from '../index';

describe('getPlural function test', () => {
  it('should return Boys', () => {
    const result = getPlural('Boy');
    expect(result).toEqual('Boys');
  });
  it('should return Girls', () => {
    const result = getPlural('Girl');
    expect(result).toEqual('Girls');
  });
});