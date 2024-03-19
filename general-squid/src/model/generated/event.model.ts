import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {Block} from "./block.model"
import {Extrinsic} from "./extrinsic.model"
import {Call} from "./call.model"

@Index_(["id", "pallet", "name", "timestamp"], {unique: false})
@Entity_()
export class Event {
    constructor(props?: Partial<Event>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Block, {nullable: true})
    block!: Block | undefined | null

    @Index_()
    @ManyToOne_(() => Extrinsic, {nullable: true})
    extrinsic!: Extrinsic | undefined | null

    @Index_()
    @ManyToOne_(() => Call, {nullable: true})
    call!: Call | undefined | null

    @Column_("int4", {nullable: false})
    index!: number

    @Column_("text", {nullable: false})
    phase!: string

    @Index_()
    @Column_("text", {nullable: false})
    pallet!: string

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("int4", {nullable: true})
    pos!: number | undefined | null

    @Column_("jsonb", {nullable: true})
    args!: unknown | undefined | null

    @Column_("text", {array: true, nullable: true})
    argsStr!: (string | undefined | null)[] | undefined | null
}
