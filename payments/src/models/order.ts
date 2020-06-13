import mongoose from 'mongoose';
import { OrderStatus } from '@tiktix/common';

interface OrderAttrs {
  id: string;
  version: number;
  userId: string;
  price: number;
  status: OrderStatus;
}

interface OrderDoc extends mongoose.Document {}

interface OrderModel extends mongoose.Model<OrderDoc> {}
