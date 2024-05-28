import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Post()
  create(@Body() addressData: Partial<Address>): Promise<Address> {
    return this.addressService.create(addressData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() addressData: Partial<Address>): Promise<Address> {
    return this.addressService.update(id, addressData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.addressService.remove(id);
  }
}
