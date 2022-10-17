// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Bastion extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'aws-tailscale:index:Bastion';

    /**
     * Returns true if the given object is an instance of Bastion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bastion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bastion.__pulumiType;
    }

    /**
     * The name of the ASG that managed the bastion instances
     */
    public /*out*/ readonly asgName!: pulumi.Output<string>;

    /**
     * Create a Bastion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BastionArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.route === undefined) && !opts.urn) {
                throw new Error("Missing required property 'route'");
            }
            if ((!args || args.subnetIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetIds'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["route"] = args ? args.route : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["asgName"] = undefined /*out*/;
        } else {
            resourceInputs["asgName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Bastion.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Bastion resource.
 */
export interface BastionArgs {
    /**
     * The EC2 instance type to use for the bastion.
     */
    instanceType?: pulumi.Input<string>;
    /**
     * The AWS region you're using.
     */
    region: pulumi.Input<string>;
    /**
     * The route you'd like to advertise via tailscale.
     */
    route: pulumi.Input<string>;
    /**
     * The subnet Ids to launch instances in.
     */
    subnetIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The VPC the Bastion should be created in.
     */
    vpcId: pulumi.Input<string>;
}
