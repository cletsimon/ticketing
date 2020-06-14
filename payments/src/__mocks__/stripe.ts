export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({
      id: 'ch_1GtpHWK15wANGjErV8Sxo0K1',
    }),
  },
};
