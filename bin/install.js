#!/usr/bin/env node

import fsx from "fs-extra";
import prompt from "prompt";
import colors from "@colors/colors/safe.js";
import { exec } from "node:child_process";

const yesNoPattern = {
  pattern: /^(Y|n)$/,
  default: "Y",
  type: "string",
  required: true,
};

const installSchema = {
  properties: {
    install: {
      description:
        "Copy the cssfabric files to the .cssfabric directory ? " +
        colors.green("Y/n"),
      ...yesNoPattern,
    },
    gitIgnore: {
      description: "Add .cssfabric to gitignore ? " + colors.green("Y/n"),
      ...yesNoPattern,
    },
  },
};

const unInstallSchema = {
  properties: {
    uninstall: {
      description:
        "delete the cssfabric files from .cssfabric directory ? " +
        colors.green("Y/n"),
      ...yesNoPattern,
    },
  },
};

var run = function (cmd) {
  var child = exec(cmd, function (error, stdout, stderr) {
    if (stderr !== null) {
      console.log("" + stderr);
    }
    if (stdout !== null) {
      console.log("" + stdout);
    }
    if (error !== null) {
      console.log("" + error);
    }
  });
};

/** import cssfabric files to .cssfabric */
export const install = async () => {

  if (fsx.existsSync("node_modules/@medyll/cssfabric")) {
    //run("ls node_modules/@medyll/cssfabric");
    console.log('found nodemodules')
  }else{
    console.error('Missing node_modules, exiting');
    process.exit(1); 
  }
  prompt.start();

  const { install, gitIgnore } = await prompt.get(installSchema);

  if (install === "Y") {

    await installCssFiles();
    await installScssFiles();
  } else {
    console.log(colors.yellow("-- skipping the cssfabric directory import"));
  }

  if (gitIgnore === "Y") {
    fsx.ensureFile(".gitignore");
    const content = fsx.readFileSync(".gitignore", {
      encoding: "utf8",
    });

    if (!content.includes(".cssfabric")) {
      fsx
        .appendFile(".gitignore", "\n#cssfabric directory \n.cssfabric")
        .then(() => {
          console.log(colors.green(".gitignore directive successfully added"));
        });
    } else {
      console.log(
        colors.yellow(
          "-- skipping : the .gitignore file already contain a .cssfabric directive"
        )
      );
    }
  }
};

/** uninstall .cssfabric files */
export const uninstall = async () => {
  prompt.start();
  const { uninstall } = await prompt.get(unInstallSchema);
  if (uninstall === "Y") {
    fsx.remove("./.cssfabric/");
  }
};

const installCssFiles = async () => {
  try {
    await fsx.copy("./src/lib/styles", "./.cssfabric/styles/");
    console.log(colors.green("cssfabric css files were successfully imported"));
  } catch (err) {
    console.error(err);
    console.log(colors.red("An error occurred while copying the css files"));
    console.error("exiting");
    process.exit(1);
  }
};

const installScssFiles = async () => {
  try {
    await fsx.copy("./src/cssfabric/modules", "./.cssfabric/modules");
    console.log(
      colors.green("cssfabric scss files were successfully imported")
    );
  } catch (err) {
    console.log(colors.red("An error occurred while copying the scss files"));
    console.error("exiting");
    process.exit(1);
  }
};
