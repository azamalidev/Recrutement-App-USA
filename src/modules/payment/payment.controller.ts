import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';
import Stripe from 'stripe';
import { Auth, AuthUser } from 'src/decorators';
import { Action } from 'src/casl/userRoles';
import { PaymentPayloadDto} from './dto/paymentDto'
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@Controller('/checkout')
@ApiTags('checkout')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }
    // Create Checkout Now
    @Post('/returnme')
    @ApiBody({ description: 'Contact Us', })

    async createme(@Body() body: any,) {
        return this.paymentService.savedPayment(body);
    }
   // Create Instant Now 
    @Post('/create-instant')
    @ApiBody({ description: 'Create Stripe Instant ', type:PaymentPayloadDto })
    async create(@Body() body: any,): Promise<Stripe.PaymentIntent> {
        return this.paymentService.createCheckoutInstant(body );
    }
}
