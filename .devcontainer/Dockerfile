FROM node:current-bullseye
# download JetBrainsMono font
RUN curl "https://download.jetbrains.com/fonts/JetBrainsMono-2.304.zip" -Ls -o JetBrainsMono
# install the JetBrainsMono font and delete the original zip
RUN unzip JetBrainsMono -d /usr/share/fonts && rm JetBrainsMono 
RUN cp /usr/share/fonts/fonts/ttf/*.ttf /usr/share/fonts/ && fc-cache -f -v