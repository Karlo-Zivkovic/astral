import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Operator} from "./operator.model"
import {Account} from "./account.model"

@Entity_()
export class Nominator {
    constructor(props?: Partial<Nominator>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Operator, {nullable: true})
    operator!: Operator

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    shares!: bigint | undefined | null

    @Column_("text", {nullable: false})
    status!: string

    @Column_("int4", {nullable: true})
    updatedAt!: number | undefined | null
}
