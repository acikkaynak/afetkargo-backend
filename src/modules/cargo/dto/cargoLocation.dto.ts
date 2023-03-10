import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { BaseDto } from "src/common/base/base.dto";

export class CargoLocationDto extends BaseDto{

    @ApiProperty()
    @AutoMap()
    cargoId: string;

    @ApiProperty()
    @AutoMap()
    lat: number;

    @ApiProperty()
    @AutoMap()
    long: number;
}