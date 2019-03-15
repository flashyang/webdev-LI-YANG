import { OrderByPipe } from './order-by-pipe.pipe';

describe('OrderByPipePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
});
