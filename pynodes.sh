HOSTS="mn2 mn3 mn4 mn5 mn6 mn7 mn8 mn9 mn10 mn11"
SCRIPT="source <(curl -s http://dobrushskiy.name/static/pynode_control.sh) $1"
for HOSTNAME in ${HOSTS} ; do
    echo $HOSTNAME
    ssh ${HOSTNAME} "${SCRIPT}"
done